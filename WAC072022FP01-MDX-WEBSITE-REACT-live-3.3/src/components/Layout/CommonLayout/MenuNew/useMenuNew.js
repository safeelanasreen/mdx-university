import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../../../logic/useDimension";

const useMenuNew = ({ linksEnabled }) => {
  const size = useWindowSize();
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showClass, setShowClass] = useState(false);

  const [activeNavIndex, setActiveNavIndex] = useState(null);
  const [activeNavSubIndex, setActiveNavSubIndex] = useState(0);
  const [isAccept, setIsAccept] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();
  const offCanvasRef = useRef();
  const [MenuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    // if (MenuOpen) {
      setIsHovered(true);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    // }
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
    setIsHovered(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
  };
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowLoader(true);
    };

    const handleRouteEnd = (url, { shallow }) => {
      setShowLoader(false);
      setShow(false);
      if (document.body.classList.contains("show-menu")) {
        document.body.classList.remove("show-menu");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteEnd);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cookiePolicy") == "true") {
      setIsAccept(false);
    } else {
      setIsAccept(true);
    }
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
  }, [router.asPath]);

  const handleToggleShow = () => {
    if (!show) {
      document.body.classList.add("show-menu");
      setShow(true);
      setTimeout(() => {
        setShowMenu(true);
      }, 100);
      setTimeout(() => {
        setShowClass(true);
      }, 150);
    } else {
      document.body.classList.remove("show-menu");
      setShowClass(false);
      setTimeout(() => {
        setShowMenu(false);
      }, 100);
      setTimeout(() => {
        setShow(false);
      }, 300);
    }
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  const handleAccept = () => {
    localStorage.setItem("cookiePolicy", true);
    setIsAccept(!isAccept);
  };

  const scrollToClicked = (item, i) => {
    if (i == 8) {
      setTimeout(() => {
        const offsetHeight = offCanvasRef.current?.scrollHeight;
        offCanvasRef.current?.scrollTo({
          top: offsetHeight + 60,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  const menuHiddenPages = !linksEnabled;
  let HeaderButtons = [
    {
      id: 1,
      label: "Online Payment",
      link: "https://payment.mdx.ac.ae/",
      target: "_blank",
    },
    {
      id: 2,
      label: "Apply Now",
      link: "https://www.mdx.ac.ae/app-portal",
      target: "_blank",
    },
  ];

  let ApplyButtonEvent = {
    eventCategory: "apply now",
    eventAction: "click",
    eventLabel: "lead",
    eventValue: "1",
  };

  return {
    size,
    show,
    router,
    isAccept,
    showLoader,
    colorChange,
    HeaderButtons,
    menuHiddenPages,
    ApplyButtonEvent,
    handleAccept,
    handleToggleShow,
    scrollToClicked,
    showMenu,
    showClass,
    offCanvasRef,
    activeNavIndex,
    setActiveNavIndex,
    MenuOpen,
    setMenuOpen,
    isHovered,
    setIsHovered,
    handleHover,
    handleMouseLeave,
  };
};

export default useMenuNew;
