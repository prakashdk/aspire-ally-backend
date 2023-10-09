import axios from 'axios';
import cheerio from 'cheerio';
import unirest from 'unirest';

 export const scrapeTechNews = async (techName) => {
  
  const url = 'https://www.techmeme.com/search/query?q='+techName+'&wm=false';
  let techNewsResults = [];
  
  try {
    // Fetch the web page
    const response = await axios.get(url);

    // Load the HTML content into Cheerio
    const $ = cheerio.load(response.data);

    // Define the selectors to target tech news articles
    const articleSelector = 'strong.L2'; 
    const titleSelector = 'a';  

    // Extract and print tech news articles
    $(articleSelector).each((index, element) => {
      const title = $(element).find(titleSelector).text().trim();
      const link = $(element).find(titleSelector).attr('href');

      // console.log(`Title: ${title}`);
      // console.log(`Link: ${link}\n`);

      techNewsResults.push({techName: techName, newsTitle : title, newsLink : link})

      // Restricting to top 3 results
      if (index === 2) {
        return false;
      }

    });

    return { 
      "techNewsResults" : techNewsResults 
    }

  } catch (error) {
    console.error('Error:', error);
  }
}


export const scrapeTechNewsV2 = async (techNames) => { 
  let techNewsResults = [];
  
  try {
    for (const techName of techNames) {
          const newsResult = await scrapeTechNews(techName);
          techNewsResults.push(...newsResult.techNewsResults);
          console.log(newsResult)    
        };

        return {
          "techNewsResults" : techNewsResults
        } 

    } catch (error){
      console.error('Error:', error);
    }

}

export const scrapeTechUpdates = async (techName) => {
  const searchQuery = `what's new in ${techName} offical`;
  
  try {
    // Encode the search query
    const encodedQuery = encodeURIComponent(searchQuery);

    // Google search URL
    const searchUrl = `https://www.google.com/search?q=${encodedQuery}`;

    console.log("URL", searchUrl)

    // Fetch the search results page
    const response = await unirest
    .get(searchUrl)
    .headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    })

    const $ = cheerio.load(response.body);
    const techUpdateTitle = $(".yuRUbf > div > span > a > h3:eq(0)").text()
    const techUpdateUrl = $(".yuRUbf > div > span > a:eq(0)").attr("href")
    
    console.log("Tech Update Url", techUpdateUrl)
    let techUpdateContent = await getHtmlText(techUpdateUrl);
    techUpdateContent = limitTokens(techUpdateContent)

    return {
      "techUpdateResults" :{
        "techName" : techName,
        "techTitle" : techUpdateTitle,
        "websiteUrl" : techUpdateUrl,
        "pageContent" : techUpdateContent
       }
    }

  } catch (error) {
    console.error('Error:', error);
  }

}

const getHtmlText = async (url) => {
  try {
      // Fetch the web page
      const response = await axios.get(url);
      // Load the HTML into Cheerio
      const $ = cheerio.load(response.data);

      // Extract all text content from the HTML
      const pageContent = $('body').text();
      return pageContent;
  } catch (error) {
     console.log(error)
  }
}

const limitTokens = (pageContent) => {
  const maxLength = 16000
  if (pageContent.length > maxLength)
    return pageContent.slice(0, maxLength)
  return pageContent
}

export const scrapeTechUpdatesV2 = async (techNames) => {
  let techResults = [];
  
  try {
    for (const techName of techNames) {
      const updateResult = await scrapeTechUpdates(techName);

      // console.log("Checkpoint 1")
      // console.log(updateResult);
      const webUrl = await updateResult.websiteUrl;

      const pageContent = await getHtmlText(webUrl);
      updateResult.techUpdateResults["pageContent"] = pageContent; 
      console.log(updateResult);
      techResults.push( updateResult.techUpdateResults );

    }

    return {
      "techUpdateResults" : techResults
    }

  } catch (error) {
    console.error('Error:', error);
  }


  console.log(techResults)
    
}