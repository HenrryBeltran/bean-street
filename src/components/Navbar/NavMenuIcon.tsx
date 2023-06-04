import type { FC, RefObject } from "react";

interface Props {
  topBreadOpen: RefObject<SVGAnimateElement>;
  topBreadClose: RefObject<SVGAnimateElement>;
  bottomBreadOpen: RefObject<SVGAnimateElement>;
  bottomBreadClose: RefObject<SVGAnimateElement>;
}

const NavMenuIcon: FC<Props> = ({
  topBreadOpen,
  topBreadClose,
  bottomBreadOpen,
  bottomBreadClose,
}) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <polyline fill="none" stroke="#4d403d" strokeWidth="2" points="0 6, 22 6">
        <animate
          ref={topBreadOpen}
          attributeName="points"
          dur="0.3s"
          begin="indefinite"
          calcMode="spline"
          keySplines="0.3, 0.5, 0.5, 1"
          values="0 6, 22 6; 1 1, 21 21"
          fill="freeze"
        ></animate>
        <animate
          ref={topBreadClose}
          attributeName="points"
          dur="0.3s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.3, 0.5, 0.5, 1"
          values="1 1, 21 21; 0 6, 22 6"
        ></animate>
      </polyline>
      <polyline fill="none" stroke="#4d403d" strokeWidth="2" points="0 16, 22 16">
        <animate
          ref={bottomBreadOpen}
          attributeName="points"
          dur=".3s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.3, 0.5, 0.5, 1"
          values="0 16, 22 16; 1 21, 21 1"
        ></animate>
        <animate
          ref={bottomBreadClose}
          attributeName="points"
          dur="0.3s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.3, 0.5, 0.5, 1"
          values="1 21, 21 1; 0 16, 22 16"
        ></animate>
      </polyline>
    </svg>
  );
};
export default NavMenuIcon;
