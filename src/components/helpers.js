import React from 'react';
import _ from 'lodash'
import ArticlesCard from './ArticlesCard';


export function flatten(object) {
  var check = _.isPlainObject(object) && _.size(object) === 1;
  return check ? flatten(_.values(object)[0]) : object;
}

export function parseXML(xml) {
  var data = {};

  var isText = xml.nodeType === 3,
      isElement = xml.nodeType === 1,
      body = xml.textContent && xml.textContent.trim(),
      hasChildren = xml.children && xml.children.length,
      hasAttributes = xml.attributes && xml.attributes.length;

  // if it's text just return it
  if (isText) { return xml.nodeValue.trim(); }

  // if it doesn't have any children or attributes, just return the contents
  if (!hasChildren && !hasAttributes) { return body; }

  // if it doesn't have children but _does_ have body content, we'll use that
  if (!hasChildren && body.length) { data.text = body; }

  // if it's an element with attributes, add them to data.attributes
  if (isElement && hasAttributes) {
    data.attributes = _.reduce(xml.attributes, function(obj, name, id) {
      var attr = xml.attributes.item(id);
      obj[attr.name] = attr.value;
      return obj;
    }, {});
  }

  // recursively call #parse over children, adding results to data
  _.each(xml.children, function(child) {
    var name = child.nodeName;

    // if we've not come across a child with this nodeType, add it as an object
    // and return here
    if (!_.has(data, name)) {
      data[name] = parseXML(child);
      return;
    }

    // if we've encountered a second instance of the same nodeType, make our
    // representation of it an array
    if (!_.isArray(data[name])) { data[name] = [data[name]]; }

    // and finally, append the new child
    data[name].push(parseXML(child));
  });

  // if we can, let's fold some attributes into the body
  _.each(data.attributes, function(value, key) {
    if (data[key] != null) { return; }
    data[key] = value;
    delete data.attributes[key];
  });

  // if data.attributes is now empty, get rid of it
  if (_.isEmpty(data.attributes)) { delete data.attributes; }

  // simplify to reduce number of final leaf nodes and return
  return flatten(data);
}

export function stringToHTML (str) {
  return parseXML(str)
};

export function decodeHTMLEntities(text) {
  let newText = text.split('<a')[0].trim()
  if (newText[newText.length - 1] === ',') {
    newText = newText.substring(0, newText.length - 1)
  }
  let textArea = document.createElement('textarea');
  textArea.innerHTML = newText.replace(/&#8230;/g, '');

  return textArea.value;
}

export function decodeHTMLEntitiesParagraphs(text) {
  let textArea = document.createElement('textarea');
  textArea.innerHTML = text
  return textArea.value;
}

export function makeArticleCards(articles = []) {
  let cards = []
  const months = Array("January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December")
  
  articles.forEach(article => {
    let description = decodeHTMLEntities(article.description)
    let type;
    let date = new Date(article.pubDate)
    let pubDate = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;

    if (article.category.includes('Art Gallery')) type = 'art'
    if (article.category.includes('Design Gallery')) type = 'design'
    if (!article.category.includes('Art Gallery') && !article.category.includes('Design Gallery')) {
      if (typeof article.category === 'object') type =  article.category[0]
      else type =  article.category
    } 
    
    cards.push(
      <ArticlesCard
        key={article.title}
        type={type}
        title={article.title}
        description={description}
        date={pubDate}
      />
    )
  })
  return cards
}



// return (
//   <div id = 'designGalleryContainer'>
//     {/* {articles.length > 0 ? console.log(articles[0].getElementsByTagName('description')[0].childNodes[0].data.split('<a')) : null} */}
//     <div className='twoTenColumn'>

//       <div id='postContainer'>
//         {articles.length >= 1 ?
//         <Post 
//           img={articles[0]['media:content'][1].url}
//           title={articles[0].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[0].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} />
//         : null }
        
//         {articles.length >=2 ?
//         <Post 
//           img={articles[1].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[1].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[1].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
//         : null }
        
//         {articles.length >= 3 ?
//         <Post 
//           img={articles[2].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[2].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[2].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} />
//         : null }
      
//       </div>
//     </div>
    
//     <div className='tenFourteenColumn'>
//       <div id='postContainer'>
        
//       {articles.length >= 4 ?
//         <Post 
//           img={articles[3].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[3].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[3].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
//         : null }
        
//         {articles.length >= 5 ?
//         <Post 
//           img={articles[4].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[4].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[4].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} />
//         : null }
        
//         {articles.length >= 6 ?
//         <Post 
//           img={articles[5].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[5].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[5].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]}/> 
//         : null }
        
//       </div>
//     </div>
    
//     <div className='fourteenEighteenColumn'>
//       <div id='postContainer'>
        
//       {articles.length >= 7 ?
//         <Post 
//           img={articles[6].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[6].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[6].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]}/> 
//         : null }
        
//       {articles.length >= 8 ?
//         <Post 
//           img={articles[7].getElementsByTagName('media:content')[1].getAttribute('url')}
//           title={articles[7].getElementsByTagName('title')[0].textContent}
//           paragraph={articles[7].getElementsByTagName('description')[0].childNodes[0].data.split('<a')[0]} /> 
//         : null }
      
//       </div>
//     </div>
  
//   </div>
// )

// let regex = /(&#.+;)/ig
  // let regex = /[\u2019]/gi
  // console.log()
  // console.log(props.paragraph.match(regex))
  // console.log(props.paragraph.split('#'))
  // let paragraph = props.paragraph.split('<a')[0]
  // console.log(props.paragraph.replace(/&#8217;/g, String.fromCharCode(8217)))
  // paragraph = paragraph.replace(/&#8217;/g, String.fromCharCode(8217));
  // paragraph = paragraph.replace(/&#8216;/g, String.fromCharCode(8216));