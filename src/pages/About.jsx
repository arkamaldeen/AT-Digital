import EngineeringIcon from '@mui/icons-material/Engineering';

export default function About() {

    const constructionStyles = {
        background: {
            backgroundColor: "#d1ced8",
            height: "100%"
        },
        IconStyle: {
            height: "auto",
            width: "5vw",
            maxWidth: "150px",
            minWidth: "50px",
            color: "#545A75",
            marginTop: "80px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center"
        },
        Font: {
            color: "#545A75",
            fontWeight: 500,
            textAlign: "center",
        }
    }

    return (
        <div className='content' style={constructionStyles.background}>
            <section className="h-100 p-5">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <EngineeringIcon style={constructionStyles.IconStyle} />
                    <h1 style={constructionStyles.Font}>About Page Under Construction</h1>
                </div>
            </section>
        </div>
    )
}