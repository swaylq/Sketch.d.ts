/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSParagraphStyleItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    firstOccurrenceOfAttributeWithName<R = unknown, P0 = unknown>(_firstOccurrenceOfAttributeWithName: P0): R;
    changeFontPropertiesOfTextObjectsInBlock<R = void, P0 = CDUnknownBlockType>(_changeFontPropertiesOfTextObjectsInBlock: P0): R;
    transformPopUpAction<R = void, P0 = unknown>(_transformPopUpAction: P0): R;
    prepareTransformPopUpButton<R = void>(): R;
    decorationButtonAction<R = void, P0 = unknown>(_decorationButtonAction: P0): R;
    prepareDecorationButton<R = void>(): R;
    awakeFromNib<R = void>(): R;
    titleItem<R = NSMenuItem>(): R;
    setTitleItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    transformControl<R = NSSegmentedControl>(): R;
    setTransformControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    decorationButton<R = NSPopUpButton>(): R;
    setDecorationButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    textItem<R = MSTextLayerItem>(): R;
    setTextItem<R = void, P0 = MSTextLayerItem>(_v: P0): R;
  }
  namespace MSParagraphStyleItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSParagraphStyleItem>(): R;
      new: <R = MSParagraphStyleItem>() => R;
    }
  }
}

declare const MSParagraphStyleItem: cocoa.MSParagraphStyleItem.CLASS;
