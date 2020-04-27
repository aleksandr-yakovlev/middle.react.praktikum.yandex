import * as React from "react";
import Item from "./Item";
import itemTestData from "./Item.tesdata";

export interface IItemContainerProps {}

export interface IItemState {}

export default class ItemContainer extends React.Component<
  IItemContainerProps,
  IItemState
> {
  constructor(props: IItemContainerProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <Item {...itemTestData} />;
  }
}
