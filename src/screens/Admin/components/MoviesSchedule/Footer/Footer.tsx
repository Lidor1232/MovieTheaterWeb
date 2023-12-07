import React, { FC, useEffect } from "react";
import useObserver from "../../../../../hooks/useObserver.hook";
import { onGetNextMoviesSchedule } from "../../../../../store/services/admin.service";

interface IProps {}

export const Footer: FC<IProps> = React.memo(({}) => {
  const [footerRef, isVisible] = useObserver({
    options: {
      threshold: 0.5,
    },
  });

  useEffect(() => {
    if (isVisible) {
      onGetNextMoviesSchedule();
    }
  }, [isVisible]);

  return <footer ref={footerRef} />;
});
