import { useEffect } from "react";
//this component is used to create a share button for multiple platforms. making it easy for the user to share the data. Reference code https://www.addtoany.com/buttons/for/website. 
const ShareButton = () =>{
    useEffect(() =>{
        const script = document.createElement('script');
        script.src = 'https://static.addtoany.com/menu/page.js';
        script.defer = true;
        document.body.appendChild(script);

        return () =>{
            document.body.removeChild(script);
        } 
    
    }, []);

    return (
        <>
        <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
            <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
            <a className="a2a_button_facebook"></a>
            <a className="a2a_button_email"></a>
            <a className="a2a_button_google_gmail"></a>
            <a className="a2a_button_whatsapp"></a>
            <a className="a2a_button_facebook_messenger"></a>
        </div>
        <script defer src="https://static.addtoany.com/menu/page.js"></script>
       </> 
    );
};
export default ShareButton; 