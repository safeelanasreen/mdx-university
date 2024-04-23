// import { useRef, useState, useEffect } from "react";
// import Style from "./Cursor.module.scss"

// const Cursor = () => {
//     if (typeof window !== 'undefined') {
//         const cursorDotOutline = useRef();
//         const cursorDot = useRef();
//         const requestRef = useRef();
//         const previousTimeRef = useRef();
//         let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//         const [width, setWidth] = useState(window.innerWidth);
//         const [height, setHeight] = useState(window.innerHeight);
//         let cursorVisible = useState(false);
//         let cursorEnlarged = useState(false);

//         /**
//          * Mouse Moves
//          */
//         const onMouseMove = event => {
//             const { pageX: x, pageY: y } = event;
//             setMousePosition({ x, y });
//             positionDot(event);
//         };
//         const onMouseEnter = () => {
//             cursorVisible.current = true;
//             toggleCursorVisibility();
//         };
//         const onMouseLeave = () => {
//             cursorVisible.current = false;
//             toggleCursorVisibility();
//         };
//         const onMouseDown = () => {
//             cursorEnlarged.current = true;
//             // toggleCursorSize();
//         };
//         const onMouseUp = () => {
//             cursorEnlarged.current = false;
//             // toggleCursorSize();
//         };
//         const onResize = event => {
//             setWidth(window.innerWidth);
//             setHeight(window.innerHeight);
//         };

//         /**
//          * Hooks
//          */
//         useEffect(() => {
//             document.addEventListener("mousemove", onMouseMove);
//             document.addEventListener("mouseenter", onMouseEnter);
//             document.addEventListener("mouseleave", onMouseLeave);
//             document.addEventListener("mousedown", onMouseDown);
//             document.addEventListener("mouseup", onMouseUp);
//             window.addEventListener("resize", onResize);
//             requestRef.current = requestAnimationFrame(animateDotOutline);

//             // Handle Link Hovers
//             handleLinkHovers();

//             return () => {
//                 document.removeEventListener("mousemove", onMouseMove);
//                 document.removeEventListener("mouseenter", onMouseEnter);
//                 document.removeEventListener("mouseleave", onMouseLeave);
//                 document.removeEventListener("mousedown", onMouseDown);
//                 document.removeEventListener("mouseup", onMouseUp);
//                 window.removeEventListener("resize", onResize);
//                 cancelAnimationFrame(requestRef.current);
//             };
//         }, []);

//         let { x, y } = mousePosition;
//         const winDimensions = { width, height };
//         let endX = winDimensions.width / 2;
//         let endY = winDimensions.height / 2;

//         /**
//          * Position Dot (cursor)
//          * @param {event}
//          */
//         function positionDot(e) {
//             cursorVisible.current = true;
//             toggleCursorVisibility();
//             // Position the dot
//             endX = e.pageX;
//             endY = e.pageY;
//             cursorDot.current.style.top = endY + "px";
//             cursorDot.current.style.left = endX + "px";
//         }

//         /**
//          * Toggle Cursor Visiblity
//          */
//         function toggleCursorVisibility() {
//             if (cursorVisible.current) {
//                 cursorDot.current.style.opacity = 1;
//                 cursorDotOutline.current.style.opacity = 1;
//             } else {
//                 cursorDot.current.style.opacity = 0;
//                 cursorDotOutline.current.style.opacity = 0;
//             }
//         }

//         /**
//          * Toggle Cursor Size
//          */
//         function toggleCursorSize() {
//             if (cursorEnlarged.current) {
//                 cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
//                 cursorDotOutline.current.style.transform =
//                     "translate(-50%, -50%) scale(0.8)";
//             } else {
//                 cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
//                 cursorDotOutline.current.style.transform =
//                     "translate(-50%, -50%) scale(1)";
//             }
//         }

//         /**
//          * Handle LInks
//          * Applies mouseover/out hooks on all links
//          * to trigger cursor animation
//          */
//         function handleLinkHovers() {
//             document.querySelectorAll("[data-cursor]").forEach(el => {
//                 el.addEventListener("mouseover", () => {
//                     cursorEnlarged.current = true;
//                     cursorDotOutline.current.classList.add(el.getAttribute('data-cursor'))
//                     cursorDotOutline.current.setAttribute('data-type',el.getAttribute('data-cursor'))
//                     // toggleCursorSize();

//                 });
//                 el.addEventListener("mouseout", () => {
//                     cursorEnlarged.current = false;
//                     cursorDotOutline.current.classList.remove(el.getAttribute('data-cursor'))
//                     cursorDotOutline.current.setAttribute('data-type','')
//                     // toggleCursorSize();
//                 });
//             });
//         }

//         /**
//          * @param {number} time
//          */
//         const animateDotOutline = time => {
//             if (previousTimeRef.current !== undefined) {
//                 x += (endX - x) / 8;
//                 y += (endY - y) / 8;
//                 cursorDotOutline.current.style.top = y + "px";
//                 cursorDotOutline.current.style.left = x + "px";
//             }
//             previousTimeRef.current = time;
//             requestRef.current = requestAnimationFrame(animateDotOutline);
//         };

//         return (
//             <>
//                 <div ref={cursorDotOutline} className={Style.cursor_dot_outline} data-type="" />
//                 <div ref={cursorDot} className={Style.cursor_dot}  />
//             </>
//         );
//     }
// }


// export default Cursor;
