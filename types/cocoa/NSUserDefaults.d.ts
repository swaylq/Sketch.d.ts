/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserDefaults<T0 = void, T1 = void, T2 = void> {
    // + NSUserDefaults(NSKeyValueCoding): 
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    // + NSUserDefaults(NSUserDefaults): 
    objectIsForcedForKey_inDomain<R = boolean, P0 = unknown, P1 = unknown>(_objectIsForcedForKey: P0, _inDomain: P1): R;
    objectIsForcedForKey<R = boolean, P0 = unknown>(_objectIsForcedForKey: P0): R;
    synchronize<R = boolean>(): R;
    removePersistentDomainForName<R = void, P0 = unknown>(_removePersistentDomainForName: P0): R;
    setPersistentDomain_forName<R = void, P0 = unknown, P1 = unknown>(_setPersistentDomain: P0, _forName: P1): R;
    persistentDomainForName<R = unknown, P0 = unknown>(_persistentDomainForName: P0): R;
    persistentDomainNames<R = unknown>(): R;
    removeVolatileDomainForName<R = void, P0 = unknown>(_removeVolatileDomainForName: P0): R;
    setVolatileDomain_forName<R = void, P0 = unknown, P1 = unknown>(_setVolatileDomain: P0, _forName: P1): R;
    volatileDomainForName<R = unknown, P0 = unknown>(_volatileDomainForName: P0): R;
    volatileDomainNames<R = unknown>(): R;
    dealloc<R = void>(): R;
    finalize<R = void>(): R;
    init<R = unknown>(): R;
    initWithSuiteName<R = unknown, P0 = unknown>(_initWithSuiteName: P0): R;
    _didEndKeyValueObserving<R = void>(): R;
    _willBeginKeyValueObserving<R = void>(): R;
    _initWithSuiteName_container<R = unknown, P0 = unknown, P1 = unknown>(__initWithSuiteName: P0, _container: P1): R;
    initWithUser<R = unknown, P0 = unknown>(_initWithUser: P0): R;
    registerDefaults<R = void, P0 = unknown>(_registerDefaults: P0): R;
    removeSuiteNamed<R = void, P0 = unknown>(_removeSuiteNamed: P0): R;
    addSuiteNamed<R = void, P0 = unknown>(_addSuiteNamed: P0): R;
    setSearchList<R = void, P0 = unknown>(_setSearchList: P0): R;
    searchList<R = unknown>(): R;
    dictionaryRepresentation<R = unknown>(): R;
    setURL_forKey<R = void, P0 = unknown, P1 = unknown>(_setURL: P0, _forKey: P1): R;
    setBool_forKey<R = void, P0 = boolean, P1 = unknown>(_setBool: P0, _forKey: P1): R;
    setDouble_forKey<R = void, P0 = number, P1 = unknown>(_setDouble: P0, _forKey: P1): R;
    setFloat_forKey<R = void, P0 = number, P1 = unknown>(_setFloat: P0, _forKey: P1): R;
    setLong_forKey<R = void, P0 = number, P1 = unknown>(_setLong: P0, _forKey: P1): R;
    setInteger_forKey<R = void, P0 = number, P1 = unknown>(_setInteger: P0, _forKey: P1): R;
    URLForKey<R = unknown, P0 = unknown>(_URLForKey: P0): R;
    boolForKey<R = boolean, P0 = unknown>(_boolForKey: P0): R;
    doubleForKey<R = number, P0 = unknown>(_doubleForKey: P0): R;
    floatForKey<R = number, P0 = unknown>(_floatForKey: P0): R;
    longForKey<R = number, P0 = unknown>(_longForKey: P0): R;
    integerForKey<R = number, P0 = unknown>(_integerForKey: P0): R;
    stringArrayForKey<R = unknown, P0 = unknown>(_stringArrayForKey: P0): R;
    dataForKey<R = unknown, P0 = unknown>(_dataForKey: P0): R;
    dictionaryForKey<R = unknown, P0 = unknown>(_dictionaryForKey: P0): R;
    arrayForKey<R = unknown, P0 = unknown>(_arrayForKey: P0): R;
    stringForKey<R = unknown, P0 = unknown>(_stringForKey: P0): R;
    removeObjectForKey_inDomain<R = void, P0 = unknown, P1 = unknown>(_removeObjectForKey: P0, _inDomain: P1): R;
    setObject_forKey_inDomain<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setObject: P0, _forKey: P1, _inDomain: P2): R;
    objectForKey_inDomain<R = unknown, P0 = unknown, P1 = unknown>(_objectForKey: P0, _inDomain: P1): R;
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    // + NSUserDefaults(NSUserDefaultsAdditions): 
    colorForKey<R = unknown, P0 = unknown>(_colorForKey: P0): R;
    setColor_forKey<R = void, P0 = unknown, P1 = unknown>(_setColor: P0, _forKey: P1): R;
  }
  namespace NSUserDefaults {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSUserDefaults(NSUserDefaults): 
      standardUserDefaults<R = unknown>(): R;
      _copyStandardUserDefaultsIfPresent<R = unknown>(): R;
      resetStandardUserDefaults<R = void>(): R;
      setStandardUserDefaults<R = void, P0 = unknown>(_setStandardUserDefaults: P0): R;
      // + NSUserDefaults(NSUserDefaults_NSURLExtras): 
      _web_preferredLanguageCode<R = unknown>(): R;
      _web_addDefaultsChangeObserver<R = void>(): R;
      _web_defaultsDidChange<R = void>(): R;
      _ensureAndLockPreferredLanguageLock<R = void>(): R;
    }
  }
}

declare const NSUserDefaults: cocoa.NSUserDefaults.CLASS;
