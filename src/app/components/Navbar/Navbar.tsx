"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useClickOutside from "@/hooks/useClickOutside";
import { useNavbarStore } from "@/stores/Navbar/Navbar.store";
import useMounted from "@/utils/Mounted";
import { AnimatePresence, motion } from "framer-motion";
import NavbarSwitch from "../Header/components/NavbarSwitch/NavbarSwitch";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

function Navbar() {
  const { setTheme, systemTheme } = useTheme();

  const isOpen = useNavbarStore((state) => state.isOpen);
  const handleOpen = useNavbarStore((state) => state.handleOpen);
  const { mounted } = useMounted();
  const ref = useClickOutside(handleOpen);
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-0 bg-black/50"
        >
          <motion.nav
            ref={ref}
            initial={{ x: -400 }}
            animate={{ x: 0, zIndex: 10 }}
            exit={{ x: -400 }}
            transition={{ type: "just" }}
            className="fixed inset-y-0 left-0 z-40 w-[265px] bg-slate-200 dark:bg-dark  max-sm:w-5/6 max-[330px]:w-screen"
          >
            <div className="flex items-center pt-4">
              <NavbarSwitch />
            </div>

            <ul className="px-4 pt-4">
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Theme</AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <Button
                        onClick={() => setTheme("light")}
                        size="none"
                        className="w-full justify-start whitespace-normal"
                        variant="ghost"
                      >
                        Light
                      </Button>
                      <Button
                        onClick={() => setTheme("dark")}
                        size="none"
                        className="w-full justify-start whitespace-normal"
                        variant="ghost"
                      >
                        Dark
                      </Button>
                      <Button
                        onClick={() => setTheme(systemTheme ?? "light")}
                        size="none"
                        className="w-full justify-start whitespace-normal"
                        variant="ghost"
                      >
                        System Default
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
