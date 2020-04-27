import React from "react";
import styles from "./Item.module.scss";

export enum ETypeItem {
  personal = 0,
  group,
  channel,
}

export interface IItemProps {
  type: ETypeItem;
  ava: string;
  label: string;
  username: string;
  shortmessage: string;
  timestamp: Date;
}

const Item = (props: IItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img className={styles.ava} src={props.ava} alt="" />
      </div>
      <div className={styles.right}>
        <p className={styles.top}>
          <span className={styles.label}>{props.label}</span>
          <span className={styles.timestamp}>
            {props.timestamp.toLocaleDateString()}
          </span>
        </p>
        <p className={styles.bottom}>
          <span>{props.username}: </span>
          <span>{props.shortmessage}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
