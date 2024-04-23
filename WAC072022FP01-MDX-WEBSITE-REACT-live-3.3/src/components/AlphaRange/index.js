import Style from "./AlphaRange.module.scss";

const AlphaRange = ({ props }) => {
  // const handleLinkClick = (e, id) => {
  //   e.preventDefault();
  //   if (typeof window !== undefined) {
  //     const target = document.getElementById(id);
  //     const targetOffset = target?.offsetTop - 140;
  //     const duration = 800; // Duration of the smooth scroll animation in milliseconds
  //     const startTime = performance.now();
  //     const startOffset = window.scrollY;

  //     const scroll = () => {
  //       const elapsed = performance.now() - startTime;
  //       const progress = Math.min(elapsed / duration, 1);
  //       const easedProgress = easeInOutCubic(progress);
  //       const yOffset = startOffset + (targetOffset - startOffset) * easedProgress;
  //       window.scrollTo(0, yOffset);

  //       if (progress < 1) {
  //         requestAnimationFrame(scroll);
  //       }
  //     };

  //     // Easing function to make the scroll animation smoother
  //     const easeInOutCubic = (t) => {
  //       return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  //     };

  //     requestAnimationFrame(scroll);
  //   }
  // };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (typeof window !== undefined) {
      const target = window.document.getElementById(id);
      if (target) {
        window.scrollTo(0, target.offsetTop - 145);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 33 || e.keyCode === 34 || e.keyCode === 35 || e.keyCode === 36) {
      e.preventDefault();
    }
  };
  return (
    <div className={Style.range} onKeyDown={(e) => handleKeyDown(e)}>
      <ul className="d-flex p-0 mb-0 overflow-auto" id="scrollbar">
        {props?.data?.letter?.map((data, i) => {
          return (
            <>
              <li
                className={"d-flex align-items-center justify-content-center"}
                key={i}
                onClick={(e) => handleLinkClick(e, data?.letter)}
                data-to-scrollspy-id={data?.letter}
              >
                {data?.letter}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default AlphaRange;
