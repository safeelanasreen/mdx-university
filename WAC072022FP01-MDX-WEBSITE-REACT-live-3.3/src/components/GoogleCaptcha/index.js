import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GoogleRecaptcha = ({ onChange, captchaReset }) => {
  const captcharef = useRef(null);

  const siteKey = "6LfPMAgeAAAAAIgGQJomD4eNeB05jHVau-2pHhmK";
  // const [siteKey, isSiteKey] = useState(
  //   "6Ldn-y8fAAAAAAsbrGrIibsj6XtZ6BflVcyyx5bh"
  // );
  // const [siteKey, isSiteKey] = useState(
  //   "6LfPMAgeAAAAAIgGQJomD4eNeB05jHVau-2pHhmK"
  // );

  useEffect(() => {
    if (captchaReset) {
      captcharef.current.reset();
    }
  }, [captchaReset]);

  return (
    <>
      <ReCAPTCHA
        ref={captcharef}
        sitekey={siteKey}
        theme={"light"}
        onChange={onChange}
      />
    </>
  );
};

export default GoogleRecaptcha;
