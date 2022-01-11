// https://nextjs.org/learn/basics/assets-metadata-css/styling-tips
// styles
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
 
// components
import Layout, { siteTitle } from '../components/layout';

// data 
import { getSortedPostsData } from '../lib/posts';



export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	
	return {
		props: {
			allPostsData
		}
	};
};


export default function Home({ allPostsData }) {
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
			
			{/* Async Data */}
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Below, Our Blog Posts:</h2>
					<ul className={utilStyles.list}>
						{allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								{title}
								<br />
								{id}
								<br />
								{date}
							</li>
						))}
					</ul>
			</section>
		</Layout>
  );
};



