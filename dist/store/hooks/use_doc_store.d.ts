import { DocStoreState } from '../../store/docStore';
export declare function useDocStore<SS = any>(getSubState: (state: DocStoreState) => SS): SS;
