import { useEffect, useState } from 'react';
import './App.css';
import { Avatar } from './components/Avatar';
import { DivFlex } from './components/DivFlex';
import { Header } from './components/Header';
import { Information } from './components/Information';
import { Repo } from './components/Repo';

function App() {
  const [dados, setDados] = useState({})
  const [repos, setRepos] = useState([])
  const [userName, setUserName] = useState('BrunoDavanzo')

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => setDados(data))
  }, [userName])

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [userName])

  return (
    <>
    <Header name={dados.name} location={dados.location} />
      <DivFlex>

        <Information name='followers' num={dados.followers} />
        <Avatar url={dados.avatar_url} />
        <Information name='following' num={dados.following} />
      </DivFlex>

      <DivFlex>
        {repos.map((repo, index, ) =>
          <Repo 
            key={index}
            name={repo.name}
            url={repo.html_url}
          />
        )}
      </DivFlex>
    </>
  );
}

export default App;