import React, { useState } from 'react'
import './App.css'
import pic1 from './assets/biolumintent.png'
import pic2 from './assets/bioluminsky.png'
import pic3 from './assets/bioluminhug.png'
import pic4 from './assets/flwrpckr.png'
import pic5 from './assets/milkhnychld.png'
import pic6 from './assets/mlkhnychld1.png'
import pic7 from './assets/mlkhnymama.png'
import pic8 from './assets/luminilnds.png'
import pic9 from './assets/luminjlly.png'
import pic10 from './assets/luminprsn.png'
import pic11 from './assets/sandanml.png'
import pic12 from './assets/sandhmn.png'
import pic13 from './assets/sandlbrnth.png'
import pic14 from './assets/sistrs.png'
import pic15 from './assets/woodnhouse.png'
import pic16 from './assets/luminfrst.png'


const pics = {
  bioluminTent: pic1,
  bioluminSky: pic2,
  bioluminHug: pic3,
  flowerpicker: pic4,
  milkHoneyChild: pic5,
  milkHoneyTwin: pic6,
  milkHoneyMama: pic7,
  luminForest: pic8,
  luminJellyfish: pic9,
  luminPerson: pic10,
  sandAnimal: pic11,
  sandHumanoid: pic12,
  sandLabyrinth: pic13,
  sisters: pic14,
  woodenhouse: pic15,
  watersOfGlow: pic16
}

const sideLength = "270px";

const Article = ({ title, content, picture1, picture2, picture3, className }) => (
  <div className={className}>
    <h3>{title}</h3>
     <img src={picture1} className="firstPic" height={sideLength} width={sideLength} />
       <img src={picture2}  className="secondPic" height={sideLength} width={sideLength} />
       <img src={picture3} className="thirdPic" height={sideLength} width={sideLength} />
    <p>{content}</p>
   </div>
);

const ArticleList = ({ articles, page, setPage }) => {
  const startIndex = (page - 1);
  const endIndex = startIndex + 1;
  const visibleArticles = articles.slice(startIndex, endIndex);

  return (
    <div>
      {visibleArticles.map(({title, content, picture1, picture2, picture3, className }) => (
        <Article key={title} title={title} content={content} picture1={picture1} picture2={picture2} picture3={picture3} className={className} />
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
    
    { title: 'Story bubbles',
      className: 'first',
      content: 'What stories does these pictures behold? AI-art holding hand with a few letters for your imagination.',
      picture1: pics.sisters,
      picture2: pics.milkHoneyChild,
      picture3: pics.watersOfGlow
    },
    { title: 'Woodland stroll',
      content: 'In the early morning hours, two sisters wandered towards their cattle. A few feet away, a keeper of the forest tiptoed home from his night shift.',
      picture1: pics.sisters,
      picture2: pics.flowerpicker,
      picture3: pics.woodenhouse
    },
    { title: 'Milk & Honey',
      content: 'Honey dripping as gold, creating an armor. Milk leaking from eyes, filling cups. Then we ballet out to the world. ',
      picture1: pics.milkHoneyChild,
      picture2: pics.milkHoneyMama,
      picture3: pics.milkHoneyTwin
    },
    { title: 'Decreasing Minutes',
      content: 'Two lovers at the end of their timeline. Before falling of the edge into oblivion, they share one last night of touch in the bioluminious frost.',
      picture1: pics.bioluminSky,
      picture2: pics.bioluminHug,
      picture3: pics.bioluminTent 
    },
    { title: 'Painting with light',
     content: 'Inside glowing waters, small jellyfish bumps around and hymn tones of creativity. Their humanoid companions paint the surrounding with light, using their jelly heads.',
     picture1: pics.luminForest,
     picture2: pics.luminJellyfish,
     picture3: pics.luminPerson 
    },
    { title: 'Sand Mutations',
      content: 'A mortal in a vast desert limping with cracked soles towards the labyrinth of  Chrono. A place where time does not exist, but vicious horse-penguins does.',
      picture1: pics.sandLabyrinth,
      picture2: pics.sandHumanoid,
      picture3: pics.sandAnimal
      },
  ];

  return (
    <ArticleList articles={articles} page={page} setPage={setPage} />
  );
};

export default ArticlePage;

