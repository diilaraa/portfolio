import { lensTypes, toFeColorMatrix } from "./cvd";

/** Hidden SVG holding one filter per lens type; referenced from globals.css. */
export function CvdFilters() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
      <defs>
        {lensTypes.map((type) => (
          <filter key={type} id={`cvd-${type}`}>
            <feColorMatrix type="matrix" values={toFeColorMatrix(type)} />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
