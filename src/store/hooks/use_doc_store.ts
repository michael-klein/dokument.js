import { docStore, DocStoreState } from '../../store/docStore';
import { useStoreState } from 'pullstate';

export function useDocStore<SS = any>(
  getSubState: (state: DocStoreState) => SS
): SS {
  return useStoreState(docStore, getSubState);
}
