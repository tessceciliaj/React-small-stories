import React, { useState } from 'react'
import './App.css'
import sisters from './assets/sistrs.png'
import woodenhouse from './assets/woodnhouse.png'
import flowerpicker from './assets/flwrpckr.png'
import sisters1 from './assets/sistrs1.png'
import bigBird from './assets/bgwtrbrd.png'
import goldenWoman from './assets/goldnwmn.png'
import stardustLake from './assets/stardustlake.png'
import bioluminTent from './assets/biolumintent.png'
import bioluminSky from './assets/bioluminsky.png'
import bioluminHug from './assets/bioluminhug.png'

const pics = {
  bioluminTentImg: bioluminTent,
  bioluminSkyImg: bioluminSky,
  bioluminHugImg: bioluminHug,
  flowerpickerImg: flowerpicker,
  sistersImg: sisters,
  woodenhouseImg: woodenhouse,
  sisters1Img: sisters1,
  bigBirdImg: bigBird,
  goldenWomanImg: goldenWoman,
  stardustlakeImg: stardustLake
}

const sideLength = "200px";

const Article = ({ title, content, picture1, picture2, picture3 }) => (
  <div>
    <h3>{title}</h3>
     <img src={picture1} height={sideLength} width={sideLength} />
       <img src={picture2} height={sideLength} width={sideLength} />
       <img src={picture3} height={sideLength} width={sideLength} />
    <p>{content}</p>
  </div>
);

const ArticleList = ({ articles, page, setPage }) => {
  const startIndex = (page - 1);
  const endIndex = startIndex + 1;
  const visibleArticles = articles.slice(startIndex, endIndex);

  return (
    <div>
      {visibleArticles.map(({title, content, picture1, picture2, picture3 }) => (
        <Article key={title} title={title} content={content} picture1={picture1} picture2={picture2} picture3={picture3} />
      ))}
      <div>
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        {articles.length > endIndex && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

const ArticlePage = () => {
  const [page, setPage] = useState(1);
  const articles = [
    
    { title: 'Miniature stories ',
     content: 'Welcome to explore my designed collection of miniarture stories. AI-art holding hand with a few words for your imagination.',
      picture1: pics.sistersImg,
      picture2: pics.stardustlakeImg,
      picture3: pics.bigBirdImg 
    },
    { title: 'Woodland stroll',
      content: 'Deep into the greenlands, with stealthy controlled steps, two sisters tiptoed on swampy moss. To help a frightened tiny flower picker calling for home. ',
      picture1: pics.sistersImg,
      picture2: pics.flowerpickerImg,
      picture3: pics.woodenhouseImg
    },
    { title: 'Article 3',
      content: 'Content 3',
      picture1: pics.sisters1Img,
      picture2: pics.goldenWomanImg,
      picture3: pics.bigBirdImg 
    },
    { title: 'Bioluminious',
      content: 'Content 4',
      picture1: pics.bioluminSkyImg,
      picture2: pics.bioluminHugImg,
      picture3: pics.bioluminTentImg 
    },
    { title: 'Article 5', content: 'Content 5' },
    { title: 'Article 6', content: 'Content 6' },
  ];

  return (
    <ArticleList articles={articles} page={page} setPage={setPage} />
  );
};

export default ArticlePage;

