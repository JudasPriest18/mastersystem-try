import Post from './Post'
import json from './assets/json.json'
import ShrekLogo from './styles/38-380597_shrek-head-png-look-and-find-shrek-forever.png'
import './styles/styles.css'

const post = new Post ('Webpack Post Title', ShrekLogo)

console.log('Post to String', post.toString())

console.log ('JSON:',json)