import styles from "./Loader.module.scss";
import { FC } from "react";
import { Bars } from "react-loader-spinner";
import { COLORS } from "../../assets/colors/colors";

interface IProps {
  style?: string;
}

export const Loader: FC<IProps> = ({ style }) => {
  return (
    <div className={`${styles.container} ${style}`}>
      <Bars
        height="80"
        width="80"
        color={COLORS.primary}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
