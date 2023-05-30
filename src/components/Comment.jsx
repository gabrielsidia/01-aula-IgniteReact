import React from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/105657820?v=4"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
              <div className={styles.authorAndTime}>
                <strong>Gabriel Maia</strong>
                <time title='29 de Maio as 15:05' dateTime='2023-05-29'>Cerca de 2h atrás</time>
              </div>

              <button title='Deletar'>
                <Trash size={24}/>
              </button>
          </header>
          
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
