/* eslint-disable @typescript-eslint/no-explicit-any */

const ModalSearch = ({ showSearchModal } : any) => {
  return (
    <div className={`modal-search ${showSearchModal ? 'show-modal' : 'hide-modal'}`}>
      <h4 className='modal-search__title'>tìm kiếm</h4>
      ModalSearch
    </div>
  )
}

export default ModalSearch