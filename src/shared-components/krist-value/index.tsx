import React from "react";

import "./index.scss";

export type KristValueProps = {
  value: number,
  long?: boolean
};

export const KristValue = ({ value, long }: KristValueProps): JSX.Element => (
  <span className="krist-value">
    <span className="icon-krist"></span>
    <span className="krist-value-amount">{value.toLocaleString()}</span>
    {long && <span className="krist-currency-long">KST</span>}
  </span>
);
