import type { styles } from "./styles";

export default interface Photo {
  id: string;
  url: string;
  caption: string;
  storagePath?: string;
}
export type Styles = typeof styles;
