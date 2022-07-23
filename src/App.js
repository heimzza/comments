import React from 'react'
import Comment from "./Comment"
import Card from "./Card"
import { faker } from '@faker-js/faker';
// rafc

const App = () => {
  return (
    <div className='ui comments' style={{
      padding: '15px'
    }}>
      <h3 className="ui dividing header">Comments</h3>
      <Card>
        <Comment name="Hamza" timeAgo={5} star={4} avatar={faker.image.avatar()} />
      </Card>
      <Card>
        <Comment name="Jo" timeAgo={7} avatar={faker.image.avatar()} />
      </Card>

      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  )
}

export default App;