import './NotFound.scss';

const NotFound = () => {
	return (
		<div className="notFound-container">
			<h1 className='notFound_title'>404</h1>
			<p className='notFound_infos'>Oups! La page que vous recherchez n'existe pas.</p>

			{/* a transformer en link ! */}
			<p className='notFound_redirection'>Retourner sur la page d'accueil</p>

		</div>);
};

export default NotFound;