/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollapseAllGroupsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    collapseAllGroups<R = void, P0 = unknown>(_collapseAllGroups: P0): R;
  }
  namespace MSCollapseAllGroupsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCollapseAllGroupsAction>(): R;
      new: <R = MSCollapseAllGroupsAction>() => R;
    }
  }
}

declare const MSCollapseAllGroupsAction: cocoa.MSCollapseAllGroupsAction.CLASS;
