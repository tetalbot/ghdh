import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence, Img, Easing } from "remotion";

const TETALBOT_AVATAR = "https://www.remotionvideo.com/objects/uploads/bd063699-250d-4e3a-bb60-12fe15cf5778";

const GeneratedComposition = ({
  title = "TetalBot",
  brandColor = "#5865F2",
}) => {
  const { fps } = useVideoConfig();

  const introEnd = Math.floor(fps * 0.8);
  const muteEnd = Math.floor(fps * 2.5);
  const channelEnd = Math.floor(fps * 5);
  const naturalEnd = Math.floor(fps * 6.5);
  const brandingEnd = Math.floor(fps * 8);

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#0a0a0f" },}
      , React.createElement(Sequence, { from: 0, durationInFrames: introEnd, premountFor: fps,}
        , React.createElement(CinematicIntro, { fps: fps, brandColor: brandColor,} )
      )

      , React.createElement(Sequence, { from: introEnd, durationInFrames: muteEnd - introEnd, premountFor: fps,}
        , React.createElement(MuteDemo, { fps: fps, brandColor: brandColor,} )
      )

      , React.createElement(Sequence, { from: muteEnd, durationInFrames: channelEnd - muteEnd, premountFor: fps,}
        , React.createElement(ChannelCreation, { fps: fps, brandColor: brandColor,} )
      )

      , React.createElement(Sequence, { from: channelEnd, durationInFrames: naturalEnd - channelEnd, premountFor: fps,}
        , React.createElement(NaturalInteraction, { fps: fps, brandColor: brandColor,} )
      )

      , React.createElement(Sequence, { from: naturalEnd, durationInFrames: brandingEnd - naturalEnd, premountFor: fps,}
        , React.createElement(BrandingCTA, { fps: fps, brandColor: brandColor, title: title,} )
      )
    )
  );
};

const CinematicIntro = ({ fps, brandColor }) => {
  const frame = useCurrentFrame();

  const zoomProgress = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const scale = interpolate(zoomProgress, [0, 1], [1, 20], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const phoneOpacity = interpolate(zoomProgress, [0.7, 1], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const discordOpacity = interpolate(zoomProgress, [0.6, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#050508" },}
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 850,
          background: `radial-gradient(ellipse at center, ${brandColor}40 0%, transparent 70%)`,
          opacity: interpolate(zoomProgress, [0, 0.5], [0.8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        },}
      )

      , React.createElement('div', {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: phoneOpacity,
          transformOrigin: "center center",
        },}

        , React.createElement('div', {
          style: {
            width: 360,
            height: 760,
            backgroundColor: "#1a1a1a",
            borderRadius: 60,
            padding: 14,
            boxShadow: `0 0 80px ${brandColor}40, 0 30px 100px rgba(0,0,0,0.9)`,
            border: "4px solid #2a2a2a",
            position: "relative",
          },}

          , React.createElement('div', {
            style: {
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 30,
              backgroundColor: "#000",
              borderRadius: 20,
              zIndex: 10,
            },}
          )
          , React.createElement('div', {
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "#36393f",
              borderRadius: 38,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            },}

            , React.createElement(DiscordMockUI, { brandColor: brandColor, showMessage: false,} )
          )
        )
      )

      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: discordOpacity,
          backgroundColor: "#36393f",
        },}

        , React.createElement(DiscordMockUI, { brandColor: brandColor, showMessage: false, fullScreen: true,} )
      )
    )
  );
};

const MuteDemo = ({ fps, brandColor }) => {
  const frame = useCurrentFrame();
  const duration = fps * 3.5;

  const messageOpacity = spring({
    frame: frame - fps * 0.1,
    fps,
    config: { damping: 150 },
    durationInFrames: 15,
  });

  const responseOpacity = spring({
    frame: frame - fps * 0.6,
    fps,
    config: { damping: 150 },
    durationInFrames: 15,
  });

  const checkmarkScale = spring({
    frame: frame - fps * 0.9,
    fps,
    config: { damping: 12, stiffness: 140 },
    durationInFrames: 20,
  });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#36393f" },}
      , React.createElement(DiscordMockUI, { brandColor: brandColor, showMessage: true, fullScreen: true,}
        , React.createElement('div', { style: { padding: "32px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" },}
          , React.createElement('div', { style: { opacity: messageOpacity, marginBottom: 28 },}
            , React.createElement(MessageBubble, {
              avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
              username: "Server Admin" ,
              color: "#fff",
              message: "@TetalBot mute @ToxicUser for 1 hour for spamming"       ,
              time: "Today at 3:42 PM"   ,}
            )
          )

          , React.createElement('div', { style: { opacity: responseOpacity },}
            , React.createElement(MessageBubble, {
              avatar: TETALBOT_AVATAR,
              username: "TetalBot",
              color: brandColor,
              isBot: true,
              message: "",
              time: "Today at 3:42 PM"   ,}

              , React.createElement('div', { style: { display: "flex", alignItems: "center", gap: 14 },}
                , React.createElement('div', {
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#3ba55c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `scale(${checkmarkScale})`,
                  },}

                  , React.createElement('span', { style: { color: "#fff", fontSize: 20, fontWeight: 700 },}, "✓")
                )
                , React.createElement('span', { style: { color: "#dcddde", fontSize: 24 },}, "Muted "
                   , React.createElement('span', { style: { color: "#ed4245" },}, "@ToxicUser"), " for 1 hour"
                )
              )
            )
          )
        )
      )
    )
  );
};

const ChannelCreation = ({ fps, brandColor }) => {
  const frame = useCurrentFrame();
  const duration = fps * 5;

  const messageOpacity = spring({
    frame: frame - fps * 0.1,
    fps,
    config: { damping: 150 },
    durationInFrames: 15,
  });

  const responseOpacity = spring({
    frame: frame - fps * 0.4,
    fps,
    config: { damping: 150 },
    durationInFrames: 15,
  });

  const drawerSlide = spring({
    frame: frame - fps * 0.8,
    fps,
    config: { damping: 18, stiffness: 110 },
    durationInFrames: 30,
  });

  const channel1Opacity = spring({ frame: frame - fps * 1, fps, config: { damping: 150 }, durationInFrames: 12 });
  const channel2Opacity = spring({ frame: frame - fps * 1.1, fps, config: { damping: 150 }, durationInFrames: 12 });
  const channel3Opacity = spring({ frame: frame - fps * 1.2, fps, config: { damping: 150 }, durationInFrames: 12 });
  const channel4Opacity = spring({ frame: frame - fps * 1.3, fps, config: { damping: 150 }, durationInFrames: 12 });

  const drawerX = interpolate(drawerSlide, [0, 1], [-400, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#36393f", overflow: "hidden" },}
      , React.createElement('div', {
        style: {
          position: "absolute",
          left: drawerX,
          top: 0,
          width: 380,
          height: "100%",
          backgroundColor: "#2f3136",
          zIndex: 10,
          borderRight: "1px solid #202225",
        },}

        , React.createElement('div', { style: { padding: "28px 24px", borderBottom: "1px solid #202225" },}
          , React.createElement('div', { style: { color: "#fff", fontSize: 28, fontWeight: 700 },}, "My Server" )
        )

        , React.createElement('div', { style: { padding: "20px 16px" },}
          , React.createElement('div', { style: { color: "#8e9297", fontSize: 18, fontWeight: 700, padding: "0 12px 16px", textTransform: "uppercase", letterSpacing: "0.5px" },}, "▼ NEWS"

          )

          , React.createElement(ChannelItem, { name: "stuff", opacity: channel1Opacity,} )
          , React.createElement(ChannelItem, { name: "conflicts", opacity: channel2Opacity,} )
          , React.createElement(ChannelItem, { name: "other", opacity: channel3Opacity,} )
          , React.createElement(ChannelItem, { name: "europe", opacity: channel4Opacity,} )
        )
      )

      , React.createElement('div', { style: { marginLeft: drawerSlide > 0.5 ? 380 : 0, transition: "margin-left 0.3s", height: "100%" },}
        , React.createElement(DiscordMockUI, { brandColor: brandColor, showMessage: true, fullScreen: true, hideNav: drawerSlide > 0.5,}
          , React.createElement('div', { style: { padding: "32px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" },}
            , React.createElement('div', { style: { opacity: messageOpacity, marginBottom: 28 },}
              , React.createElement(MessageBubble, {
                avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
                username: "Server Owner" ,
                color: "#fff",
                message: "@TetalBot create a category called \"News\" with channels: stuff, conflicts, other, europe"           ,
                time: "Today at 4:15 PM"   ,}
              )
            )

            , React.createElement('div', { style: { opacity: responseOpacity },}
              , React.createElement(MessageBubble, {
                avatar: TETALBOT_AVATAR,
                username: "TetalBot",
                color: brandColor,
                isBot: true,
                message: "",
                time: "Today at 4:15 PM"   ,}

                , React.createElement('div', { style: { color: "#dcddde", fontSize: 24 },}
                  , React.createElement('div', { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 },}
                    , React.createElement('span', { style: { color: "#3ba55c", fontSize: 28 },}, "✓"), "Created category "
                      , React.createElement('span', { style: { color: brandColor, fontWeight: 600 },}, "News")
                  )
                  , React.createElement('div', { style: { color: "#8e9297", fontSize: 20 },}, "Created 4 channels: #stuff, #conflicts, #other, #europe"

                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

const NaturalInteraction = ({ fps, brandColor }) => {
  const frame = useCurrentFrame();

  const msg1Opacity = spring({ frame: frame - fps * 0.2, fps, config: { damping: 200 }, durationInFrames: 25 });
  const msg2Opacity = spring({ frame: frame - fps * 0.6, fps, config: { damping: 200 }, durationInFrames: 25 });
  const msg3Opacity = spring({ frame: frame - fps * 1, fps, config: { damping: 200 }, durationInFrames: 25 });
  const msg4Opacity = spring({ frame: frame - fps * 1.4, fps, config: { damping: 200 }, durationInFrames: 25 });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#36393f" },}
      , React.createElement(DiscordMockUI, { brandColor: brandColor, showMessage: true, fullScreen: true,}
        , React.createElement('div', { style: { padding: "32px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" },}
          , React.createElement('div', { style: { opacity: msg1Opacity, marginBottom: 24 },}
            , React.createElement(MessageBubble, {
              avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
              username: "ModeratorMike",
              color: "#fff",
              message: "@TetalBot who has been most active today?"      ,
              time: "Today at 5:30 PM"   ,}
            )
          )

          , React.createElement('div', { style: { opacity: msg2Opacity, marginBottom: 24 },}
            , React.createElement(MessageBubble, {
              avatar: TETALBOT_AVATAR,
              username: "TetalBot",
              color: brandColor,
              isBot: true,
              message: "Today's most active members: 1. @GamerGirl (142 msgs), 2. @CodeWizard (98 msgs), 3. @MusicLover (76 msgs)"               ,
              time: "Today at 5:30 PM"   ,}
            )
          )

          , React.createElement('div', { style: { opacity: msg3Opacity, marginBottom: 24 },}
            , React.createElement(MessageBubble, {
              avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
              username: "ModeratorMike",
              color: "#fff",
              message: "any rule violations?"  ,
              time: "Today at 5:31 PM"   ,}
            )
          )

          , React.createElement('div', { style: { opacity: msg4Opacity },}
            , React.createElement(MessageBubble, {
              avatar: TETALBOT_AVATAR,
              username: "TetalBot",
              color: brandColor,
              isBot: true,
              message: "No rule violations detected in the last 24 hours. Server is clean! 🎉"            ,
              time: "Today at 5:31 PM"   ,}
            )
          )
        )
      )
    )
  );
};

const BrandingCTA = ({ fps, brandColor, title }) => {
  const frame = useCurrentFrame();

  const logoScale = spring({
    frame: frame - fps * 0.2,
    fps,
    config: { damping: 8, stiffness: 150 },
    durationInFrames: 50,
  });

  const logoRotate = interpolate(frame, [0, fps * 0.8], [0, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = spring({
    frame: frame - fps * 0.5,
    fps,
    config: { damping: 12, stiffness: 120 },
    durationInFrames: 40,
  });

  const titleScale = spring({
    frame: frame - fps * 0.5,
    fps,
    config: { damping: 12, stiffness: 120 },
    durationInFrames: 40,
  });

  const subtitleOpacity = spring({
    frame: frame - fps * 0.8,
    fps,
    config: { damping: 12, stiffness: 120 },
    durationInFrames: 40,
  });

  const subtitleSlide = interpolate(frame, [fps * 0.8, fps * 1.2], [-50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaOpacity = spring({
    frame: frame - fps * 1.2,
    fps,
    config: { damping: 10, stiffness: 130 },
    durationInFrames: 40,
  });

  const ctaScale = spring({
    frame: frame - fps * 1.2,
    fps,
    config: { damping: 10, stiffness: 130 },
    durationInFrames: 40,
  });

  const linkOpacity = spring({
    frame: frame - fps * 1.6,
    fps,
    config: { damping: 12, stiffness: 120 },
    durationInFrames: 40,
  });

  const linkSlide = interpolate(frame, [fps * 1.6, fps * 2], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [fps * 2.5, fps * 3], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    React.createElement(AbsoluteFill, {
      style: {
        backgroundColor: "#0a0a0f",
        opacity: fadeOut,
      },}

      , React.createElement('div', {
        style: {
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${brandColor}25 0%, transparent 60%)`,
        },}
      )

      , React.createElement('div', {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: 40,
        },}

        , React.createElement('div', {
          style: {
            width: 280,
            height: 280,
            borderRadius: 80,
            overflow: "hidden",
            transform: `scale(${logoScale}) rotateZ(${logoRotate}deg)`,
            boxShadow: `0 0 120px ${brandColor}70, 0 0 200px ${brandColor}40`,
            marginBottom: 80,
          },}

          , React.createElement(Img, { src: TETALBOT_AVATAR, style: { width: "100%", height: "100%", objectFit: "cover" },}  )
        )

        , React.createElement('div', {
          style: {
            color: "#fff",
            fontSize: 96,
            fontWeight: 900,
            opacity: titleOpacity,
            marginBottom: 24,
            fontFamily: "Inter, sans-serif",
            transform: `scale(${titleScale})`,
            transformOrigin: "center",
          },}

          , "Tetal Bot"
        )

        , React.createElement('div', {
          style: {
            color: "#94a3b8",
            fontSize: 48,
            fontWeight: 500,
            opacity: subtitleOpacity,
            marginBottom: 120,
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            transform: `translateY(${subtitleSlide}px)`,
          },}
, "Your Discord. Your Rules."

        )

        , React.createElement('div', { style: { opacity: ctaOpacity, marginBottom: 20 },}
          , React.createElement('div', {
            style: {
              backgroundColor: brandColor,
              padding: "18px 48px",
              borderRadius: 30,
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
              boxShadow: `0 8px 30px ${brandColor}60`,
              fontFamily: "Inter, sans-serif",
            },}
, "Add TetalBot to Your Server"

          )
        )

        , React.createElement('div', {
          style: {
            color: "#5865F2",
            fontSize: 18,
            fontWeight: 500,
            opacity: linkOpacity,
            fontFamily: "Inter, sans-serif",
          },}
, "discord.gg/DRW6EWJPAZ"

        )
      )
    )
  );
};

const DiscordMockUI = ({ brandColor, showMessage, fullScreen, hideNav, children }) => {
  return (
    React.createElement('div', {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: "#36393f",
        display: "flex",
        flexDirection: "column",
      },}

      , !hideNav && (
        React.createElement('div', {
          style: {
            height: fullScreen ? 120 : 80,
            backgroundColor: "#2f3136",
            borderBottom: "1px solid #202225",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            paddingTop: fullScreen ? 50 : 30,
          },}

          , React.createElement('div', { style: { width: 36, height: 36, marginRight: 18, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 },}
            , React.createElement('div', { style: { width: 28, height: 3, backgroundColor: "#b9bbbe", borderRadius: 2 },} )
            , React.createElement('div', { style: { width: 28, height: 3, backgroundColor: "#b9bbbe", borderRadius: 2 },} )
            , React.createElement('div', { style: { width: 28, height: 3, backgroundColor: "#b9bbbe", borderRadius: 2 },} )
          )
          , React.createElement('span', { style: { color: "#8e9297", fontSize: 24, marginRight: 6, fontWeight: 700 },}, "#")
          , React.createElement('span', { style: { color: "#fff", fontSize: 28, fontWeight: 700 },}, "general")
        )
      )

      , React.createElement('div', { style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" },}, children)

      , React.createElement('div', {
        style: {
          height: fullScreen ? 90 : 70,
          backgroundColor: "#40444b",
          margin: "0 24px 32px 24px",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        },}

        , React.createElement('div', {
          style: {
            width: 42,
            height: 42,
            borderRadius: 21,
            backgroundColor: "#4f545c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
          },}

          , React.createElement('span', { style: { color: "#b9bbbe", fontSize: 28 },}, "+")
        )
        , React.createElement('span', { style: { color: "#72767d", fontSize: 24 },}, "Message #general" )
      )
    )
  );
};

const MessageBubble = ({ avatar, username, color, message, time, isBot, children }) => {
  return (
    React.createElement('div', { style: { display: "flex", gap: 20 },}
      , React.createElement('div', { style: { width: 60, height: 60, borderRadius: 30, overflow: "hidden", flexShrink: 0 },}
        , React.createElement(Img, { src: avatar, style: { width: "100%", height: "100%", objectFit: "cover" },}  )
      )
      , React.createElement('div', { style: { flex: 1 },}
        , React.createElement('div', { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 8 },}
          , React.createElement('span', { style: { color, fontSize: 24, fontWeight: 700 },}, username)
          , isBot && (
            React.createElement('span', {
              style: {
                backgroundColor: "#5865F2",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 6,
              },}
, "BOT"

            )
          )
          , React.createElement('span', { style: { color: "#72767d", fontSize: 18 },}, time)
        )
        , message && React.createElement('div', { style: { color: "#dcddde", fontSize: 24, lineHeight: 1.5 },}, message)
        , children
      )
    )
  );
};

const ChannelItem = ({ name, opacity }) => {
  return (
    React.createElement('div', {
      style: {
        display: "flex",
        alignItems: "center",
        padding: "14px 12px",
        borderRadius: 6,
        opacity,
      },}

      , React.createElement('span', { style: { color: "#8e9297", fontSize: 32, marginRight: 12, fontWeight: 700 },}, "#")
      , React.createElement('span', { style: { color: "#8e9297", fontSize: 26, fontWeight: 500 },}, name)
    )
  );
};

export default GeneratedComposition;