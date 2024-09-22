import { MagnifyingGlass } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <MagnifyingGlass
        visible={true}
        height={80}
        width={80}
        ariaLabel="Loading indicator"
        glassColor="#b3e0ff"
        color="#1e90ff"
      />
    </div>
  );
};

export default Loader;
