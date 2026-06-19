import { useEffect, useRef, useState, type FormEvent } from "react";
import "./ChatEleve.css";
import { EleveTabs } from "../components/EleveTabs";
import { Avatar } from "../icons/Avatar";
import { conversationsEleve, reponseAutomatique, type ConversationChat, type MessageChat } from "../data/mockData";

function cloner(liste: ConversationChat[]): ConversationChat[] {
  return liste.map((c) => ({ ...c, messages: [...c.messages] }));
}

let compteurId = 0;
function nouvelId() {
  compteurId += 1;
  return `local-${compteurId}`;
}

export function ChatEleve() {
  const [conversations, setConversations] = useState<ConversationChat[]>(() => cloner(conversationsEleve));
  const [selectedId, setSelectedId] = useState(conversationsEleve[0].id);
  const [mobileShowThread, setMobileShowThread] = useState(false);
  const [brouillon, setBrouillon] = useState("");
  const [enTrainDecrire, setEnTrainDecrire] = useState<string | null>(null);
  const [envoisCompteur, setEnvoisCompteur] = useState<Record<string, number>>({});

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const conversation = conversations.find((c) => c.id === selectedId) ?? conversations[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [conversation?.messages.length, enTrainDecrire]);

  function ouvrirConversation(id: string) {
    setSelectedId(id);
    setMobileShowThread(true);
  }

  function retourListe() {
    setMobileShowThread(false);
  }

  function envoyerMessage(e: FormEvent) {
    e.preventDefault();
    const texte = brouillon.trim();
    if (!texte) return;

    const messageEleve: MessageChat = {
      id: nouvelId(),
      auteur: "eleve",
      texte,
      heure: "À l'instant",
    };

    setConversations((prev) =>
      prev.map((c) => (c.id === conversation.id ? { ...c, messages: [...c.messages, messageEleve] } : c))
    );
    setBrouillon("");

    const indexEnvoi = envoisCompteur[conversation.id] ?? 0;
    setEnvoisCompteur((prev) => ({ ...prev, [conversation.id]: indexEnvoi + 1 }));

    setEnTrainDecrire(conversation.id);
    const idConv = conversation.id;
    window.setTimeout(() => {
      const reponse = reponseAutomatique(idConv, indexEnvoi);
      const messageContact: MessageChat = {
        id: nouvelId(),
        auteur: "contact",
        texte: reponse,
        heure: "À l'instant",
      };
      setConversations((prev) =>
        prev.map((c) => (c.id === idConv ? { ...c, messages: [...c.messages, messageContact] } : c))
      );
      setEnTrainDecrire(null);
    }, 1100);
  }

  return (
    <div>
      <EleveTabs />

      <div className="chat-header">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 10 }}>
            Espace élève
          </p>
          <h1 style={{ color: "var(--cotton)", fontSize: "1.7rem" }}>Chat</h1>
          <p style={{ color: "rgba(250,243,229,0.78)", marginTop: 8, maxWidth: 520 }}>
            Échange avec tes enseignants, tes camarades et l'assistant EduBurkina pour débloquer un exercice.
          </p>
        </div>
      </div>

      <div className="container chat-body">
        <div className={`chat-shell ${mobileShowThread ? "show-thread" : ""}`}>
          <div className="chat-list">
            {conversations.map((c) => {
              const dernier = c.messages[c.messages.length - 1];
              return (
                <button
                  key={c.id}
                  className={`chat-list-item ${c.id === selectedId ? "active" : ""}`}
                  onClick={() => ouvrirConversation(c.id)}
                >
                  <Avatar seed={c.avatarSeed} size={44} />
                  {c.enLigne && <span className="online-dot" />}
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <p style={{ fontWeight: 700, fontSize: "0.9rem" }}>{c.nom}</p>
                    </div>
                    <p style={{ color: "var(--ink-soft)", fontSize: "0.78rem", marginBottom: 4 }}>{c.role}</p>
                    <p
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: "0.82rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {dernier?.auteur === "eleve" ? "Toi : " : ""}
                      {dernier?.texte}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="chat-thread">
            <div className="chat-thread-header">
              <button className="chat-back-btn" aria-label="Retour à la liste" onClick={retourListe}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <Avatar seed={conversation.avatarSeed} size={40} />
              <div>
                <p style={{ fontWeight: 700, fontSize: "0.94rem" }}>{conversation.nom}</p>
                <p style={{ color: "var(--ink-soft)", fontSize: "0.78rem" }}>
                  {conversation.enLigne ? "En ligne" : conversation.role}
                </p>
              </div>
            </div>

            <div className="chat-messages">
              {conversation.messages.map((m) => (
                <div key={m.id} className={`chat-bubble-row ${m.auteur}`}>
                  <div className={`chat-bubble ${m.auteur}`}>
                    {m.texte}
                    <span className="chat-bubble-time">{m.heure}</span>
                  </div>
                </div>
              ))}

              {enTrainDecrire === conversation.id && (
                <div className="chat-bubble-row contact">
                  <div className="chat-bubble contact chat-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-row" onSubmit={envoyerMessage}>
              <input
                className="chat-input"
                placeholder="Écris ton message…"
                value={brouillon}
                onChange={(e) => setBrouillon(e.target.value)}
              />
              <button type="submit" className="chat-send-btn" aria-label="Envoyer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 11l18-7-7 18-3-7-8-4Z" fill="var(--white)" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <p style={{ color: "var(--ink-soft)", fontSize: "0.8rem", marginTop: 14, textAlign: "center" }}>
          Conversations de démonstration — les réponses sont simulées.
        </p>
      </div>
    </div>
  );
}
