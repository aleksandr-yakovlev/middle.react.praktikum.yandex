import React, { FunctionComponent } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';

import { IProps } from './types';
import { Message } from 'components/Main/Message';

import styles from './MessageList.module.scss';

export const MessageList: FunctionComponent<IProps> = (props) => {
  const { hasNextPage, isNextPageLoading, items, loadNextPage, chatId } = {
    ...props,
  };

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  // Render an item or a loading indicator.
  const Row = ({ index, style }: ListChildComponentProps) => {
    // console.log(items[0]);
    let content;
    if (!isItemLoaded(index)) {
      content = 'Loading...';
    } else {
      content = <Message chatId={chatId} isPinned={true} {...items[index]} />;
    }
    return (
      <div key={`ch${index}`} style={style}>
        {content}
      </div>
    );
  };

  // const { isItemLoaded, loadMoreItems } = { ...props };
  return chatId ? (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              className="List"
              height={height}
              itemCount={itemCount}
              itemSize={51}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={width * 0.8}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  ) : (
    <div className={styles.blank}>Выберите чат...</div>
  );
};
