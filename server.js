const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003
const fs = require('fs')

app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      // this is an extremely simple view engine we'll be more complex later
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1 style="display: flex; position: relative; justify-content: center;">' + options.message + '</h1>').replace('#img#', '<img alt="" style="display: block; position: relative; margin-left: auto; margin-right: auto;" width="300px" src=' + options.img + '>').replace('#content#','<div style="display: flex; position: relative; justify-content: center;">'+ options.content + '</div>' )
      return callback(null, rendered)
    })
  })
  app.set('views', './views') // specify the views directory
  app.set('view engine', 'hypatia') // register the hypatia view engine

const roster = [
    {
        id: 0, 
        name: 'Giannis Antetokounmpo', 
        age: 26, 
        jerseyNum: 34, 
        position: 'PF' 
    },
    {
        id: 1, 
        name: 'Khris Middleton', 
        age: 30, 
        jerseyNum: 22, 
        position: 'SF' 
    },
    {
        id: 2, 
        name: 'Jrue Holiday', 
        age: 32, 
        jerseyNum: 21, 
        position: 'PG' 
    },
    {
        id: 3, 
        name: 'Bobby Portis', 
        age: 27, 
        jerseyNum: 9, 
        position: 'C' 
    },
    {
        id: 4, 
        name: 'Brook Lopez', 
        age: 34, 
        jerseyNum: 11, 
        position: 'C' 
    },
    {
        id: 5, 
        name: 'Pat Connaughton', 
        age: 29, 
        jerseyNum: 24, 
        position: 'SG' 
    },
    {
        id: 6, 
        name: 'Grayson Allen', 
        age: 26, 
        jerseyNum: 7, 
        position: 'SG' 
    },
    {
        id: 7, 
        name: 'Serge Ibaka', 
        age: 32, 
        jerseyNum: 25, 
        position: 'C' 
    },
    {
        id: 8, 
        name: 'George Hill', 
        age: 36, 
        jerseyNum: 3, 
        position: 'PG' 
    },
    {
        id: 9, 
        name: 'Jordan Nwora', 
        age: 23, 
        jerseyNum: 13, 
        position: 'SF' 
    }
]

app.get('/', (req, res) => {
    res.render('1', { title: 'Bucks Roster', message: 'Bucks Roster 2022-23', img: 'https://1000logos.net/wp-content/uploads/2018/03/Milwaukee-Bucks-Logo-1968.png', content: '<br> As the bucks try at it again this year for the NBA Championship, select through to see the roster for this upcoming season.'})
})

app.get('/bucks/:id', (req, res) => {
    if (req.params.id < roster.length) {
        res.render('2', { title: 'Bucks Roster', message: roster[req.params.id].name, content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 15%; border: 1px solid black;">
            <h3>Age: ${roster[req.params.id].age}</h3>
            <br>
            <h3>Jersey #: ${roster[req.params.id].jerseyNum}</h3>
            <br>
            <h3>Position: ${roster[req.params.id].position}</h3>
        </div>
    `})
    } else {
        res.send('<h2>Outside of the scope</h2>')
    }
    
})

app.get('/chudi', (req, res) => {
    res.render('2', { title: 'Profile', message: 'Chudi Ibida', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="300px" src="https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png">
            <br>
            <p>Chudi is an aspiring programmer</p>
        </div>
    `})
})

app.get('/meme', (req, res) => {
    res.render('2', { title: 'Jokes', message: 'Glad I chose to be a programmer.', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="300px" src="https://www.boredpanda.com/blog/wp-content/uploads/2022/03/6228a2ac81c49_hwurhp7crzf81-png__700.jpg">
            <br>
            <p>Idea theft is no joke</p>
        </div>
    `})
})

app.get('/pun', (req, res) => {
    res.render('2', { title: 'Jokes', message: 'Get it?', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="500px" src="http://static.demilked.com/wp-content/uploads/2015/02/css-puns-web-design-saijo-george-1.jpg">
            <br>
            <p>It wasn't funny, trust me, I know...</p>
        </div>
    `})
})

app.get('/dogs', (req, res) => {
    res.render('2', { title: 'Animals', message: 'All dogs go to heaven', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="400px" src="https://allabout-pets.com/wp-content/uploads/2020/03/female-pitbull.jpg">
            <br>
            <p>Funnest fact of your day. Stamped.</p>
        </div>
    `})
})

app.get('/rick', (req, res) => {
    res.render('2', { title: 'Rick', message: 'Ouu tell me more about your Szechuan Sauce sale', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="400px" src="https://mystickermania.com/cdn/stickers/rick-and-morty/sticker_3258-512x512.png">
            <br>
            <p>Don't mind the noises in the background, I live with losers.</p>
        </div>
    `})
})

app.get('/movie', (req, res) => {
    res.render('2', { title: 'Movie', message: 'Some people can read War & Peace and come away thinking its a simple adventure story', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="400px" src="https://static01.nyt.com/images/2018/03/31/arts/31ready-player-spoiler1/merlin_135594042_cff6a816-5d06-4f55-bcd1-05fb222cba24-superJumbo.jpg">
            <br>
            <p>Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe. ~ Lex Luthor</p>
        </div>
    `})
})

app.get('/games', (req, res) => {
    res.render('2', { title: 'Games', message: 'Just making sure we are of the same gen...', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="400px" src="https://preview.redd.it/1pt5xl2iuvk21.jpg?auto=webp&s=24edeac7483cfc1e040b66a09c8f0e4357265f98">
            <br>
            <p>Nah but seriously, I know you've played a game on here. It's fine if you don't wanna talk about it. It can be our secret :)</p>
        </div>
    `})
})

app.get('/comedian', (req, res) => {
    res.render('2', { title: 'Jokes', message: 'The greatest comedian of my generation', content: `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img width="400px" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg">
            <br>
            <p>Dave Chapelle frolicking in the grasslands.</p>
        </div>
    `})
})

app.listen(port, () => {
    console.log('listening on port', port)
})
