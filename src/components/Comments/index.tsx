import { useEffect } from 'react';

export default function Comments(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-utterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute(
      'repo',
      'andrelinos/ignite-reactjs-criando-um-projeto-do-zero'
    );
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'Comment :speech_balloon:');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('async', 'async');
    anchor.appendChild(script);
  }, []);

  return <div id="inject-comments-for-utterances" />;
}
