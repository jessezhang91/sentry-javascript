import type { Span } from '@sentry/types';
import type { SentrySpan } from './../tracing/sentrySpan';

/**
 * Returns the root span of a given span.
 *
 * As long as we use `Transaction`s internally, the returned root span
 * will be a `Transaction` but be aware that this might change in the future.
 *
 * If the given span has no root span or transaction, `undefined` is returned.
 */
export function getRootSpan(span: Span): Span | undefined {
  // TODO (v8): Remove this check and just return span
  // eslint-disable-next-line deprecation/deprecation
  return (span as SentrySpan).transaction ? (span as SentrySpan).transaction : undefined;
}
