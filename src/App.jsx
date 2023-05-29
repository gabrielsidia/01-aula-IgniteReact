import Header from "./components/Header"
import styles from './App.module.css'
import './global.css'
import { Post } from "./components/Post"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <>
    <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>  
          <Post 
            author='Gabriel Maia'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, maiores deserunt voluptatum at'
          />
          <Post 
            author='Gabriel Maia'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, maiores deserunt voluptatum at'
          />
        </main>
      </div>
    </>
  )
}

export default App
