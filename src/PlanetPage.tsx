import { Main } from './components/Main'
import { Middle } from './components/Middle'
import { Planets } from './components/Planets'
import { Info } from './components/Info'
import { useParams } from 'react-router-dom'
import planets from './/planets.json'
import { planetImages } from './planetImage'
import { Source } from './components/Source'
import { Button } from './components/Button'
import { Footer } from './components/Footer'
import { internalAssets } from './PlanetsInterlan'
import { useState } from 'react'
import {saternalImages} from './PlanetSaternal'


export const PlanetPage = () => {

   const {planetName} = useParams();
  
   const planet = planets.find(res => res.name.toLocaleLowerCase() === planetName?.toLocaleLowerCase())
   
   const [view , setView] = useState<`overview` | `structure` | `geology` > ("overview");

  
  return (
    <div>
          <div className='main-div'>
     <Main className='head-div'  >
     </Main>
     <Middle className= 'middle' >
     {planet && (
      <Planets className={view === 'structure' ? "relative-show" : "relative" }
       >
        <img src={planetImages[planet.name.toLocaleLowerCase() as keyof typeof planetImages]} alt="" />
        {view === 'structure' && (
            <img className='absolute' src={internalAssets[planet.name.toLocaleLowerCase()]} alt="" />
        )
       }
       {view === 'geology' && (
        <img className='geology' src={saternalImages[planet.name.toLocaleLowerCase() as keyof typeof planetImages]} alt="" />
       )}

      </Planets>
     )}
     <Middle className='middle-info' >
    {planet && (
      <Info className = "info">
        {view === 'overview' && (
            planet.overview.content
        )}
        {view === 'structure' && (
            planet.structure.content
        )}
        {view === 'geology' && (
            planet.geology.content
        )}
        </Info>
      
    )}
    {planet && (
        <Source className = "source">
        Source:   <a target='blank' href={planet.overview.source}>Wikipedia</a> 
        </Source>
    )}
    <Middle className='buttons'>
       <Button onClick={() => setView("overview")}>
         <span>01</span>
         <p>overview</p>
       </Button>
       <Button onClick={() => {setView("structure")}}>
         <span>02</span>
         <p>Internal Structure</p>
       </Button>
       <Button onClick={() => {setView('geology')}}>
         <span>03</span>
         <p>Surface Geology</p>
       </Button>
    </Middle>
     </Middle>
     </Middle>
     <Footer className='footer'>
        <Footer >
            <p>rotation time</p>
            <h1>{planet?.rotation}</h1>
        </Footer>
        <Footer >
            <p>revolution time</p>
            <h1>{planet?.revolution}</h1>
        </Footer>
        <Footer >
            <p>radius</p>
            <h1>{planet?.radius}</h1>
        </Footer>
        <Footer >
            <p>avarage temp.</p>
            <h1>{planet?.temperature}</h1>
        </Footer>
     </Footer>
    </div>
    </div>
  )
}
