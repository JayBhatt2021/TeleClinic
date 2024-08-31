"use client";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { db } from "./firebase/firebase";

interface Item {
  id: string;
  name: string;
  price: number;
}

const DEFAULT_NEW_ITEM: Item = {
  id: "",
  name: "",
  price: 0,
};

const COLLECTION_PATH = "items";

const calculateTotal = (itemList: Item[]): number =>
  itemList.reduce((sum, item) => sum + item.price, 0);

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>(DEFAULT_NEW_ITEM);
  const [total, setTotal] = useState<number>(0);

  // Add item to database
  const addItem = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (newItem.name !== "" && newItem.price !== 0) {
      await addDoc(collection(db, COLLECTION_PATH), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem(DEFAULT_NEW_ITEM);
    }
  };

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, COLLECTION_PATH));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemList: Item[] = [];

      querySnapshot.forEach((doc) => {
        itemList.push({
          id: doc.id,
          name: doc.data().name,
          price: Number(doc.data().price),
        });
      });

      setItems(itemList);

      // Set total from itemList
      setTotal(calculateTotal(itemList));

      return () => unsubscribe();
    });
  }, []);

  // Delete item from database
  const deleteItem = async (id: string) =>
    await deleteDoc(doc(db, COLLECTION_PATH, id));

  return (
    <main className="min-h-screen p-4 sm:p-24 flex flex-col items-center justify-between">
      <div className="w-full max-w-5xl font-mono text-sm items-center justify-between">
        <h1 className="p-4 text-4xl text-center">Expense Tracker</h1>
        <div className="p-4 rounded-lg bg-slate-800">
          <form className="grid grid-cols-6 items-center text-black">
            <input
              className="col-span-3 p-3 border"
              type="text"
              placeholder="Enter Item"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              className="col-span-2 p-3 border mx-3"
              type="number"
              min="0"
              max="1000"
              step="0.01"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: Number(e.target.value) })
              }
            />
            <button
              className="p-3 text-xl text-white bg-slate-950 hover:bg-slate-900"
              type="submit"
              onSubmit={(e) => addItem(e)}
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li className="my-4 flex bg-slate-950" key={id}>
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <button
                  className="border-l-2 border-slate-900 hover:bg-slate-900 w-16"
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {items.length === 0 ? (
            ""
          ) : (
            <div className="flex justify-between p-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
