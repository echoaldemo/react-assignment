import { Dialog, Transition } from '@headlessui/react'
import Button from 'components/button'
import { Fragment } from 'react/jsx-runtime'
import { NotesDetails } from 'store/NotesReducer'

interface IProps {
  open: boolean
  setOpen: (x: boolean) => void
  data: NotesDetails | null
}

function NoteDetails({ open, setOpen, data }: IProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {data?.title}
                </Dialog.Title>
                <div className="mt-2 text-sm space-y-px">
                  <p>Description:</p>
                  <p className="text-gray-500 ">{data?.description}</p>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default NoteDetails
