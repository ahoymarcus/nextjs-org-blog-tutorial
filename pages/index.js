// https://nextjs.org/learn/basics/assets-metadata-css/global-styles
// estilo globais
import Head from 'next/head'
 
// components
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';




export default function Home() {
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			
			<section className={utilStyles.headingMd}>
				<p>My Woof Skills</p>
				
				<ul>
					<li>Frontend avançado com REACT-JS ou Vanilla-JS.</li>
					<li>Backend intermediário com NODE-JS e EXPRESS: APIs RESTful e autenticação com JWT.</li>
					<li>Frameworks: Redux e Typescript.</li>
					<li>Web design: HTML5 e CSS3 avançados, com padrão Mobile-First, SASS.</li>
					<li>MongoDB: administração, modelagem e analytics com a Aggregation API.</li>
					<li>Bancos de dados relacionais: MySql e SQLServer.</li>
					<li>Capacitado em inglês avançado, conversação e escrita.</li>
				</ul>
				
				<p>Meus contatos:</p>
				<ul>
					<li><a href="https://github.com/ahoymarcus">meu repositório pessoal no Github</a></li>
					<li><a href="https://www.linkedin.com/feed/">meu perfil no Linkedin</a></li>
				</ul>
				
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>
				</p>
			</section>
		</Layout>
  );
};



