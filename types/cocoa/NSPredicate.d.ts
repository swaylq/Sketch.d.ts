/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicate<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    description<R = unknown>(): R;
    predicateWithSubstitutionVariables<R = unknown, P0 = unknown>(_predicateWithSubstitutionVariables: P0): R;
    acceptVisitor_flags<R = void, P0 = unknown, P1 = number>(_acceptVisitor: P0, _flags: P1): R;
    evaluateWithObject_substitutionVariables<R = boolean, P0 = unknown, P1 = unknown>(_evaluateWithObject: P0, _substitutionVariables: P1): R;
    evaluateWithObject<R = boolean, P0 = unknown>(_evaluateWithObject: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    allowEvaluation<R = void>(): R;
    _allowsEvaluation<R = boolean>(): R;
    generateMetadataDescription<R = unknown>(): R;
    _validateForMetadataQueryScopes<R = void, P0 = unknown>(__validateForMetadataQueryScopes: P0): R;
    predicateFormat<R = NSString>(): R;
  }
  namespace NSPredicate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSPredicate>(): R;
      new: <R = NSPredicate>() => R;
      predicateFromMetadataQueryString<R = unknown, P0 = unknown>(_predicateFromMetadataQueryString: P0): R;
      predicateWithBlock<R = unknown, P0 = CDUnknownBlockType>(_predicateWithBlock: P0): R;
      predicateWithValue<R = unknown, P0 = boolean>(_predicateWithValue: P0): R;
      predicateWithFormat_arguments<R = unknown, P0 = unknown, P1 = __va_list_tag>(_predicateWithFormat: P0, _arguments: P1): R;
      predicateWithFormat<R = unknown, P0 = unknown>(_predicateWithFormat: P0): R;
      predicateWithFormat_argumentArray<R = unknown, P0 = unknown, P1 = unknown>(_predicateWithFormat: P0, _argumentArray: P1): R;
      retainedLocale<R = __CFLocale>(): R;
      newStringFrom_usingUnicodeTransforms<R = unknown, P0 = unknown, P1 = number>(_newStringFrom: P0, _usingUnicodeTransforms: P1): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSPredicate: cocoa.NSPredicate.CLASS;
