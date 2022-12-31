import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    containerList: initialHistoryList,
    inputValue: '',
  }

  onGivenInput = event => {
    const {containerList, inputValue} = this.state
    this.setState({inputValue: event.target.value})
    const outputList = containerList.filter(eachOne =>
      eachOne.title.toLowerCase().includes(inputValue.toLowerCase()),
    )

    this.setState({containerList: outputList})
  }

  onDeleteItem = id => {
    const {containerList} = this.state
    const outList = containerList.filter(eachListItem => eachListItem.id !== id)
    this.setState({containerList: outList})
  }

  render() {
    const {containerList} = this.state
    return (
      <div>
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt=" app logo"
            className="img"
          />

          <div className="search">
            <div className="search-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div>
              <input
                type="search"
                placeholder="Search History"
                className="search-input"
                onChange={this.onGivenInput}
              />
            </div>
          </div>
        </div>
        {containerList.length === 0 ? (
          <p className="no-output">There is no history to show</p>
        ) : (
          <ul className="list-cont">
            {containerList.map(eachItem => (
              <li className="list-item">
                <div className="image-cont">
                  <p className="para head">{eachItem.timeAccessed}</p>
                  <img
                    src={eachItem.logoUrl}
                    alt="domain logo"
                    className="para image"
                  />
                  <p className="para head">{eachItem.title}</p>
                  <p className="para"> {eachItem.domainUrl}</p>
                </div>
                <button
                  type="button"
                  className="buttin"
                  onClick={this.onDeleteItem}
                  testid="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default App
