import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin evlat?',
        'Kahretsin! Bu çıkmaz yol.',
        'Üzgünüm Böyle Bir Sayfa Bulunamadı'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

