import React, { useState } from 'react'
import './App.css'
import sisters from './assets/sistrs.png'
import woodenhouse from './assets/woodnhouse.png'
import flowerpicker from './assets/flwrpckr.png'
import galaxyChild from './assets/glxychld.png'
import galaxyPet from './assets/glxypt.png'
import galaxyWoman from './assets/glxywmn.png'
import bioluminTent from './assets/biolumintent.png'
import bioluminSky from './assets/bioluminsky.png'
import bioluminHug from './assets/bioluminhug.png'
import luminForest from './assets/luminfrst.png'
import luminJellyfish from './assets/luminjlly.png'
import luminPerson from './assets/luminprsn.png'
import sandAnimal from './assets/sandanml.png'
import sandHumanoid from './assets/sandhmn.png'
import sandLabyrinth from './assets/sandlbrnth.png'

const pics = {
  bioluminTentImg: bioluminTent,
  bioluminSkyImg: bioluminSky,
  bioluminHugImg: bioluminHug,
  flowerpickerImg: flowerpicker,
  galaxyChildImg: galaxyChild,
  galaxyPetImg: galaxyPet,
  galaxyWomanImg: galaxyWoman,
  galaxyWomanImg: galaxyWoman,
  luminForestImg: luminForest,
  luminJellyfishImg: luminJellyfish,
  luminPersonImg: luminPerson,
  sandAnimalImg: sandAnimal,
  sandHumanoidImg: sandHumanoid,
  sandLabyrinthImg: sandLabyrinth,
  sistersImg: sisters,
  woodenhouseImg: woodenhouse
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
     content: 'Welcome to explore my designed collection of miniarture stories. AI-art holding hand with a few words for your mind.',
      picture1: pics.sistersImg,
      picture2: pics.galaxyChildImg,
      picture3: pics.sandHumanoidImg
    },
    { title: 'Woodland stroll',
      content: 'Deep into the greenlands, with stealthy controlled steps, two sisters tiptoed on swampy moss. To help a frightened tiny flower picker calling for home. ',
      picture1: pics.sistersImg,
      picture2: pics.flowerpickerImg,
      picture3: pics.woodenhouseImg
    },
    { title: 'Starry Gaze',
      content: 'Look into the eyes of a starry child and you can see a reflection of thier thoughts. A mother whom reflects as a goddess & a microorganism who just stare at you back.',
      picture1: pics.galaxyChildImg,
      picture2: pics.galaxyWomanImg,
      picture3: pics.galaxyPetImg
    },
    { title: 'Decreasing Minutes',
      content: 'Two lovers at the end of their timeline. Before falling of the edge into oblivion, they share one last night of touch in the bioluminious frost.',
      picture1: pics.bioluminSkyImg,
      picture2: pics.bioluminHugImg,
      picture3: pics.bioluminTentImg 
    },
    { title: 'Painting with light',
     content: 'Inside glowing waters, small jellyfish bumps around and hymn tones of creativity. Their humanoid companions paint the surrounding with light, using their jelly heads.',
     picture1: pics.luminForestImg,
     picture2: pics.luminJellyfishImg,
     picture3: pics.luminPersonImg 
    },
    { title: 'Sand Mutations',
      content: 'A sand humanoid in a vast desert limping with cracked soles towards the labyrinth of  Chrono. A place where time does not exist, but horse-penguins does.',
      picture1: pics.sandAnimalImg,
      picture2: pics.sandHumanoidImg,
      picture3: pics.sandLabyrinthImg
      },
  ];

  return (
    <ArticleList articles={articles} page={page} setPage={setPage} />
  );
};

export default ArticlePage;

