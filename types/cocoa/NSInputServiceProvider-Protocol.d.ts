/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputServiceProviderProtocol<T0 = void, T1 = void, T2 = void> {
    activeConversationChanged_toNewConversation<R = void, P0 = unknown, P1 = number>(_activeConversationChanged: P0, _toNewConversation: P1): R;
    activeConversationWillChange_fromOldConversation<R = void, P0 = unknown, P1 = number>(_activeConversationWillChange: P0, _fromOldConversation: P1): R;
    inputClientDisabled<R = void, P0 = unknown>(_inputClientDisabled: P0): R;
    inputClientEnabled<R = void, P0 = unknown>(_inputClientEnabled: P0): R;
    inputClientResignActive<R = void, P0 = unknown>(_inputClientResignActive: P0): R;
    inputClientBecomeActive<R = void, P0 = unknown>(_inputClientBecomeActive: P0): R;
    wantsToDelayTextChangeNotifications<R = boolean>(): R;
    wantsToHandleMouseEvents<R = boolean>(): R;
    wantsToInterpretAllKeystrokes<R = boolean>(): R;
    canBeDisabled<R = boolean>(): R;
    terminate<R = void, P0 = unknown>(_terminate: P0): R;
    markedTextSelectionChanged_client<R = void, P0 = _NSRange, P1 = unknown>(_markedTextSelectionChanged: P0, _client: P1): R;
    markedTextAbandoned<R = void, P0 = unknown>(_markedTextAbandoned: P0): R;
    doCommandBySelector_client<R = void, P0 = string, P1 = unknown>(_doCommandBySelector: P0, _client: P1): R;
    insertText_client<R = void, P0 = unknown, P1 = unknown>(_insertText: P0, _client: P1): R;
  }
  namespace NSInputServiceProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
