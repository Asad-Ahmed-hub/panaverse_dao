import { QuaterType } from "@/DataType/DataType";
import React, { useCallback, useEffect, useState } from "react";

const RichText = ({ quaters, i }: { quaters: QuaterType[]; i: number }) => {
  const [qdata, setQData] = useState<QuaterType>({
    id: 1,
    title: "",
    richtext: "",
  });
  useEffect(() => {
    (() => {
      setQData(quaters[i]);
    })();
  }, [quaters, i]);
  return (
    <div className="w-full">
      <p dangerouslySetInnerHTML={{ __html: qdata.richtext }}></p>
    </div>
  );
};

export default RichText;
