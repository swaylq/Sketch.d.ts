/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BUStarfieldTimelineItemProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    timelineItemDate<R = NSDate>(): R;
    timelineItemType<R = number>(): R;
    timelineItemIsDivider<R = boolean>(): R;
    timelineItemSelectable<R = boolean>(): R;
    timelineItemEnabled<R = boolean>(): R;
    timelineItemFocusedTitle<R = NSString>(): R;
    timelineItemTitle<R = NSString>(): R;
  }
  namespace BUStarfieldTimelineItemProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
