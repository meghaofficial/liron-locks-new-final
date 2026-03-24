import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

type PopupType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
  children: React.ReactNode;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Popup = ({ isOpen, setIsOpen, type, children }: PopupType) => {
  return (
    <div className="">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-semibold text-brand">{type}</span>
                <RxCross2 className="cursor-pointer" onClick={() => setIsOpen(false)} />
              </div>
              <div className="md:max-h-100 max-h-75 overflow-y-auto">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Popup
