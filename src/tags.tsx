import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Marker,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Text,
  TextPath,
  TSpan,
  Use,
  Symbol,
  Filter,
  FeColorMatrix,
  FeGaussianBlur,
  FeOffset,
} from './ReactNativeSVG';

export const tags = {
  circle: Circle,
  clipPath: ClipPath,
  defs: Defs,
  ellipse: Ellipse,
  filter: Filter,
  feColorMatrix: FeColorMatrix,
  feGaussianBlur: FeGaussianBlur,
  feOffset: FeOffset,
  g: G,
  image: Image,
  line: Line,
  linearGradient: LinearGradient,
  marker: Marker,
  mask: Mask,
  path: Path,
  pattern: Pattern,
  polygon: Polygon,
  polyline: Polyline,
  radialGradient: RadialGradient,
  rect: Rect,
  stop: Stop,
  svg: Svg,
  symbol: Symbol,
  text: Text,
  textPath: TextPath,
  tspan: TSpan,
  use: Use,
} as const;